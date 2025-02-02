import Image from "next/image";
import Link from "next/link";
import { AsideProps } from "./aside.props";
import { Categories } from "./Categories";
import { Tags } from "./Tags";

export const Aside = ({ pathname, tags, isAuthorized }: AsideProps) => {
    return (
        <aside className="w-full px-4 pt-4 text-gray-600 border-r-2 border-gray-200">
            <div className="border-b-2 border-gray-200 pb-4">
                <Link href="/">
                    <Image
                        src="/icons/logo.png"
                        width={192}
                        height={70}
                        alt="Logo"
                    />
                </Link>
                <Categories pathname={pathname} isAuthorized={isAuthorized} />
            </div>
            <Tags tags={tags} />
        </aside>
    );
};
