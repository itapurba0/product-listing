import { NextResponse } from "next/server";
import { getAllProducts, addProduct, searchProducts } from "@/data/store";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (query) {
    const results = searchProducts(query);
    return NextResponse.json(results);
  }

  const products = getAllProducts();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.brand || !body.category || !body.price) {
      return NextResponse.json(
        { error: "Missing required fields: name, brand, category, price" },
        { status: 400 }
      );
    }

    const newProduct = addProduct({
      name: body.name,
      brand: body.brand,
      category: body.category,
      price: Number(body.price),
      description: body.description || "",
      imageUrl: body.imageUrl || "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      specifications: body.specifications || [],
      stockStatus: body.stockStatus || "In Stock",
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
