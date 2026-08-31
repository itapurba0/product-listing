import { NextResponse } from "next/server";
import { getProductById, updateProduct, deleteProduct } from "@/data/store";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const body = await request.json();
    const updated = updateProduct(id, {
      ...(body.name && { name: body.name }),
      ...(body.brand && { brand: body.brand }),
      ...(body.category && { category: body.category }),
      ...(body.price !== undefined && { price: Number(body.price) }),
      ...(body.description !== undefined && { description: body.description }),
      ...(body.imageUrl && { imageUrl: body.imageUrl }),
      ...(body.specifications && { specifications: body.specifications }),
      ...(body.stockStatus && { stockStatus: body.stockStatus }),
    });

    if (!updated) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const deleted = deleteProduct(id);

  if (!deleted) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
