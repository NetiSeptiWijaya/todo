import "reflect-metadata"
import { DataSource } from "typeorm";
import { Task } from "./entity/Task";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 5432,
    username: "Neti09",
    password: "521012009",
    database: "todo",
    synchronize: true,
    logging: false,
    entities: [Task],
    migrations: [],
    subscribers: [],
})
