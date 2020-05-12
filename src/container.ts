import { Container } from 'inversify';
import "reflect-metadata";

import { Services } from "./types";
import { UIController, UIModel } from './components/ui';
import { RainBoxController, RainBoxModel, RainBoxView } from './components/rainBox';
import { StageService } from "./services";

const container = new Container();

export const bind = () => {
    container.bind(UIModel).toSelf().inSingletonScope();
    container.bind(UIController).toSelf().inSingletonScope();

    container.bind(RainBoxController).toSelf().inSingletonScope();
    container.bind(RainBoxModel).toSelf().inSingletonScope();
    container.bind(RainBoxView).toSelf().inSingletonScope();

    // services
    container.bind<StageService>(Services.Stage).to(StageService).inSingletonScope();
};

export const unbind = () => {
    container.unbind(Services.Stage);
};

export const init = async () => {
    container.get(UIModel).onInit();
    container.get(UIController).onInit();

    container.get(RainBoxModel).onInit();
    container.get(RainBoxController).onInit();
    container.get(RainBoxView).onInit();


    container.get<StageService>(Services.Stage).onInit();
};

export const destroy = async () => {
};

