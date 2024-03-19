import { IDBPDatabase, openDB } from "idb";

class LocalDB {
	private db: any;

	constructor() {
		(async () => {
			try {
				this.db = await openDB("Anchorage", 1, {
					upgrade(db: IDBPDatabase) {
						const tableNames = ["cart", "fav", "user"];
						for (const tableName of tableNames) {
							if (db.objectStoreNames.contains(tableName)) {
								continue;
							}
							db.createObjectStore(tableName, {
								keyPath: "id",
								autoIncrement: false,
							});
						}
					},
				});
			} catch (error) {
				console.log(error);
				return false;
			}
		})();
	}

	public async createObjectStore(tableNames: string[]) {
		try {
			this.db = await openDB("Anchorage", 1, {
				upgrade(db: IDBPDatabase) {
					console.log("hi");
					for (const tableName of tableNames) {
						if (db.objectStoreNames.contains(tableName)) {
							continue;
						}
						db.createObjectStore(tableName, {
							keyPath: "id",
							autoIncrement: false,
						});
					}
					console.log(db.objectStoreNames);
				},
			});
			return this.db.objectStore;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
	public async clearTable() {
		return await this.db.clear("registeration");
	}
	public async getValue(tableName: string, id: number) {
		const tx = this.db.transaction(tableName, "readonly");
		const store = tx.objectStore(tableName);
		const result = await store.get(id);
		return result;
	}
	public async updateValue(
		tableName: string,
		value: object,
		id: number | undefined
	): Promise<object> {
		const tx = this.db.transaction(tableName, "readwrite");
		const store = tx.objectStore(tableName);
		const result = await store.get(id);
		if (result !== undefined) {
			await store.put({ ...result, ...value });
		} else {
			store.add(value);
		}
		return await store.get(id);
	}

	public async getAllValue(tableName: string) {
		const tx = this.db.transaction(tableName, "readonly");
		const store = tx.objectStore(tableName);
		const result = await store.getAll();
		return result;
	}
	public async putValue(tableName: string, value: object) {
		const tx = this.db.transaction(tableName, "readwrite");
		const store = tx.objectStore(tableName);
		const result = await store.add(value);
		return result;
	}

	public async putBulkValue(tableName: string, values: object[]) {
		const tx = this.db.transaction(tableName, "readwrite");
		const store = tx.objectStore(tableName);
		for (const value of values) {
			await store.put(value);
		}
		return this.getAllValue(tableName);
	}

	public async deleteValue(tableName: string, id: number) {
		const tx = this.db.transaction(tableName, "readwrite");
		const store = tx.objectStore(tableName);
		const result = await store.get(id);
		if (!result) {
			return result;
		}
		await store.delete(id);
		return id;
	}
}

export default LocalDB;
