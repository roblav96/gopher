// 

export { }



declare global {

	namespace NodeJS {
		interface Process {
			dtsgen: (name: string, value: any) => void
		}
		interface Global {

		}
	}

	interface VenmoPublicResponse {
		paging: {
			next: string
			previous: string
		}
		data: Array<VenmoItem>
	}
	interface VenmoItem {
		action_links: any
		actor: VenmoTransaction
		audience: string
		comments: Array<any>
		created_time: string
		likes: {
			count: number
			data: Array<any>
		}
		mentions: Array<any>
		message: string
		payment_id: number
		permalink: string
		story_id: string
		transactions: Array<VenmoTarget>
		type: string
		updated_time: string
		via: string
	}
	interface VenmoTarget {
		target: VenmoTransaction
	}
	interface VenmoTransaction {
		cancelled: boolean
		date_created: string
		external_id: string
		firstname: string
		id: string
		is_business: boolean
		lastname: string
		name: string
		picture: string
		username: string
	}





}



