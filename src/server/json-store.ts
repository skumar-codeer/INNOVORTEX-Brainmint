import { mkdir, readFile, writeFile } from 'fs/promises';
import path from 'path';

export interface StoredRecord<T> {
  id: string;
  createdAt: string;
  data: T;
}

const STORAGE_DIR = path.join(process.cwd(), '.data');

function createId(prefix: string) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

async function readCollection<T>(fileName: string): Promise<StoredRecord<T>[]> {
  try {
    const file = await readFile(path.join(STORAGE_DIR, fileName), 'utf8');
    return JSON.parse(file) as StoredRecord<T>[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }

    throw error;
  }
}

export async function appendRecord<T>(fileName: string, prefix: string, data: T): Promise<StoredRecord<T>> {
  await mkdir(STORAGE_DIR, { recursive: true });

  const records = await readCollection<T>(fileName);
  const record: StoredRecord<T> = {
    id: createId(prefix),
    createdAt: new Date().toISOString(),
    data,
  };

  records.push(record);
  await writeFile(path.join(STORAGE_DIR, fileName), JSON.stringify(records, null, 2));

  return record;
}
