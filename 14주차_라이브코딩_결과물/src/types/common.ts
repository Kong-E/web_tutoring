export type CommonResponseType<P> = {
  status: "success" | "failed"
  data: P
}

export type ShoppingCartItemType = {
	pk: number;
	title: string;
	description: string;	
	viewCount: number;
	likeCount: number;
}

export type ShoppingCartListType = ShoppingCartItemType[]