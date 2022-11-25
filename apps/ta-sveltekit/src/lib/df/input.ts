import qs from 'qs';

export const inputFromFormData = (formData: FormDataLike) => inputFromSearch(new URLSearchParams(formData as URLSearchParams));
export const inputFromForm = async (request: RequestLike) => inputFromFormData(await request.clone().formData());
export const inputFromUrl = (request: RequestLike) => inputFromSearch(new URL(request.url).searchParams);
export const inputFromSearch = (queryString: URLSearchParams) => qs.parse(queryString.toString()) as ParsedQs;

type ParsedQs = {
  [key: string]: undefined | string | string[] | ParsedQs | ParsedQs[];
};

type FormDataLike = Iterable<readonly [PropertyKey, unknown]>;
type RequestLike = {
  url: string;
  clone: () => {formData: () => Promise<FormDataLike>};
};
