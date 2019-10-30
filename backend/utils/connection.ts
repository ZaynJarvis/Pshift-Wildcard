import { createConnection } from 'typeorm';

export class Conn {
    static conn: any = null;

    private Connection() {}

    static async getInstance() {
        if (!Conn.conn) {
            Conn.conn = await createConnection();
            return Conn.conn;
        } else return Conn.conn;
    }
}
