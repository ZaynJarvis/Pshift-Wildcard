import { createConnection } from 'typeorm';

export class Conn {
    public static conn: any = null;

    public static async getInstance() {
        if (!Conn.conn) {
            Conn.conn = await createConnection();
            return Conn.conn;
        } else {
            return Conn.conn;
        }
    }

    private Connection() {}
}
