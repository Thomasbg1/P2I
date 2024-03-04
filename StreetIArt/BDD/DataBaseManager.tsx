import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("database.db");

export default class DatabaseManager {

    static initializeDatabase(): void {
        db.transaction(tx => {
            tx.executeSql(
                "create table if not exists\
                    Oeuvres (\
                        oeuvre_id integer primary key autoincrement not null,\
                        title text not null,\
                        description text,\
                        location text,\
                        image text\
                    );"
            );
        }, (e) => { console.log("ERREUR + " + e) },
            () => { console.log("OK + ") }
        );
    }
}
                        
 