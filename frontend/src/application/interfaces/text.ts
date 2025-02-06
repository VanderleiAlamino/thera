import { TagTypes } from "../enums/tags";

export interface ITextProps {
  children: React.ReactNode;
  className?: string;
  tag?: TagTypes;
}
