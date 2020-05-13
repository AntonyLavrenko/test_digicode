import { Container } from 'inversify';
import "reflect-metadata";

import { UIController, UIModel } from './components/ui';
import { RainBoxController, RainBoxView } from './components/rainBox';
import { StageService } from "./services";
import {ServiceTypes} from "./types";
import {ServiceInterface} from "./interfaces/AbstractService";
import {AbstractController, AbstractModel, AbstractView} from "./interfaces";
import {UITypes} from "./components/ui/types";
import {RainBoxTypes} from "./components/rainBox/types";

const container = new Container();

export const bind = () => {
    container.bind<AbstractModel>(UITypes.Model).to(UIModel).inSingletonScope();
    container.bind<AbstractController>(UITypes.Controller).to(UIController).inSingletonScope();

    container.bind<AbstractController>(RainBoxTypes.Controller).to(RainBoxController).inSingletonScope();
    container.bind<AbstractView>(RainBoxTypes.View).to(RainBoxView).inSingletonScope();

    // services
    container.bind<ServiceInterface>(ServiceTypes.Stage).to(StageService).inSingletonScope();
};

export const unbind = () => {
    container.unbind(StageService);
};

export const init = async () => {
    container.get<ServiceInterface>(ServiceTypes.Stage).onInit();

    container.get<AbstractModel>(UITypes.Model).onInit();
    container.get<AbstractController>(UITypes.Controller).onInit();

    container.get<AbstractController>(RainBoxTypes.Controller).onInit();
    container.get<AbstractView>(RainBoxTypes.View).onInit();
};

export const destroy = async () => {
};

