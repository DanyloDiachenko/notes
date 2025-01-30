import { Tag } from "@/interfaces/common/tag.interface";

export interface AsideProps {
    pathname: string;
    tags: Tag[];
    isAuthorized: boolean;
}