import {IDropdownLink} from "../types";

type DropdownLinkType = (data: object) => IDropdownLink;

export const toDropdownLink: DropdownLinkType = data => ({
    name: "name",
    path: "path"
})