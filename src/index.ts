import { exit } from "process"
import { MetadataWithSuchNameAlreadyExistsError } from "typeorm"
import { AppDataSource } from "./data-source"
import { Task } from "./entity/Task"
import promptSync from 'prompt-sync'

function menu() {
    console.log("Menu Applikasi Todo");
    console.log("1. Tambah Task");
    console.log("2. Daftar Task");
    console.log("3. Ubah Task");
    console.log("4. Hapus Task");
    console.log("5. Selesai Task");
    console.log("0. untuk Keluar dari applikasi");
    console.log("Masukkan Angka 1 - 5 untuk memilih operasi yang ingin dilakukan");
    console.log("Mohon Masukkan Pilihan Anda");
}

AppDataSource.initialize().then(async () => {
    /*
    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")
    */

    const prompt = promptSync({sigint: true});
    let input_menu = null;
    do {
        menu();
        input_menu = prompt("Masukkan Pilihan Operasi yang ingin anda lakukan ? ");
        console.log(`Pilihan Anda: ${input_menu}`);
        if (parseInt(input_menu) === 1) {
            console.log("Anda Memilih Operasi Tambah Data Task");
            const input_data = prompt("Masukkan Nama Task : ");
            let task = new Task();
            task.name = input_data;
            task.is_done = false;
            await AppDataSource.manager.save(task);
        } else if (input_menu === 2) {
            console.log("Melakukan Operasi Menampilkan Daftar Tugas");
        } else if (input_menu === 3) {
            console.log("Melakukan Operasi Melakukan Ubah Tugas");
        } else if (input_menu === 4) {
            console.log("Melakukan Operasi Melakukan Hapus Tugas");
        } else if (input_menu === 5) {
            console.log("Melakukan Operasi Melakukan Selesai Tugas");
        } else if (input_menu === 0) {
            console.log("Terimakasih telah menggunakan applikasi kami");
            return process.exit(1);
        }
    } while (parseInt(input_menu) >= 1 && parseInt(input_menu) <= 5 );
}).catch(error => console.log(error))
