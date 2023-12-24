import { ModelArg } from '@prisma/client/runtime/library';
import { modalType } from './use-modal-store';
import {create} from "zustand";

export type modalType = "Create Server";

interface modalStore{
    type: modalType | null;
    isOpen: Boolean;
    onOpen: (type: ModelType) => void;
}