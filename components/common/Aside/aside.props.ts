import { Tag } from "@/types/tag.interface";

export interface AsideProps {
    pathname: string;
    tags: Tag[];
    isAuthorized: boolean;
}
