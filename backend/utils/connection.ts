import { createConnection } from 'typeorm';

export class Conn {
    public static conn: any = null;

    public static async getInstance() {
        if (!Conn.conn) {
            try {
                Conn.conn = await createConnection();
            } catch (e) {
                console.log(e);
            }
            return Conn.conn;
        } else {
            return Conn.conn;
        }
    }

    public static async closeConnection() {
        await Conn.conn.close();
        Conn.conn = null;
    }
    
    private Connection() {}
}
