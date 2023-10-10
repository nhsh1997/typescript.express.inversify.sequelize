import {
    API_TYPES,
    API_NAMES,
} from '@api/const';

import { IApplication, container } from '@api/index';

const index = container.getNamed<IApplication>(
    API_TYPES.APPLICATION,
    API_NAMES.API.toString(),
);

new Promise(async () => {
    await index.load();
    await index.start();
});
