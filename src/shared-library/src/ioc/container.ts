import { Container } from 'inversify';
import {TYPES} from "@shared-library/const";

export const container = new Container();

container.bind<number>(TYPES.HTTP_CONTEXT).toConstantValue(1);

