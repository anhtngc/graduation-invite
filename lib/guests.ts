import { promises as fs } from "fs";
import path from "path";

export interface Guest {
  name: string;
  visitedAt: string;
}

// File lưu danh sách khách (chỉ dùng cho local dev và Vercel KV trong production)
const DATA_FILE = path.join(process.cwd(), "data", "guests.json");

async function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf-8");
  }
}

export async function getGuests(): Promise<Guest[]> {
  await ensureDataFile();
  const data = await fs.readFile(DATA_FILE, "utf-8");
  try {
    return JSON.parse(data) as Guest[];
  } catch {
    return [];
  }
}

export async function addGuest(name: string): Promise<Guest> {
  const guests = await getGuests();
  const newGuest: Guest = {
    name,
    visitedAt: new Date().toISOString(),
  };
  guests.push(newGuest);
  await fs.writeFile(DATA_FILE, JSON.stringify(guests, null, 2), "utf-8");
  return newGuest;
}
