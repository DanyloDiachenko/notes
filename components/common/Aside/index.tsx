import Image from "next/image";
import Link from "next/link";
import { AsideProps } from "./Aside.props";
import { Categories } from "./Categories";
import { Tags } from "./Tags";

export const Aside = async ({ isAuthorized, pathname }: AsideProps) => {
    return (
        <aside className="w-full px-4 pt-4 text-gray-600 border-r-2 border-gray-200">
            <div className="border-b-2 border-gray-200 pb-4">
                <Link href="/">
                    <Image src="/logo.png" width={192} height={70} alt="Logo" />
                </Link>
                <Categories pathname={pathname} isAuthorized={isAuthorized} />
            </div>
            <Tags isAuthorized={isAuthorized} />
        </aside>
    );
};
