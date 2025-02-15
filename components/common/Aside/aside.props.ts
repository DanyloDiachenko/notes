import { Tag } from "@/types/tag.interface";

export interface AsideProps {
    isAuthorized: boolean;
    pathname: string;
    tags: Tag[];
}
