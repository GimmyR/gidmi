import { Detail } from "@/interfaces/detail";

export function getDetailToSave(order: number, detail: Detail) {
    return {
        where: {
            id: detail.id
        },
        data: {
            order: order
        }
    };
}