export interface CreateTagRequestBody {
    title: string;
    slug: string;
}

export interface UpdateTagRequestBody extends Partial<CreateTagRequestBody> {}
