import { Client } from '@elastic/elasticsearch';
import cfg from '../config/config';

export default new Client({
    node: `http://${cfg.elk_server_name}:${cfg.elk_port}`,
});
