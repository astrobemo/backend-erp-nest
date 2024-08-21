import { createConnection } from "mysql2";

export const databaseProviders = [
    {
        provide: "DATABASE_CONNECTION",
        useFactory: async () => {
            const connection = await createConnection({
                host: "localhost",
                user: "root",
                password: "root",
                database: "test",
            });
            return connection; 
        }
    }
];