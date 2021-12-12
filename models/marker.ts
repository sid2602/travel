import { Position } from "./position";

export interface Marker extends Position {
  monumentName: string;
  img: string;
}
