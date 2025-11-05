import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  try {
    const jsonDirectory = path.join(process.cwd(), 'src/data/products');
    const fileContents = await fs.readFile(
      jsonDirectory + '/ruggedsa-products-detailed.json',
      'utf8'
    );
    
    return NextResponse.json(JSON.parse(fileContents));
  } catch (error) {
    console.error('Error reading products file:', error);
    return NextResponse.json(
      { error: 'Failed to load products' },
      { status: 500 }
    );
  }
}
