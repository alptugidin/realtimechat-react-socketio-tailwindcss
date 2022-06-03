const Tick = ({status}) => {


	const color = () => {
		if (status === "seen") {
			return "rgb(34,211,238)"
		} else {
			return "rgb(107, 114, 128)"
		}
	}

	const hasSent = () => {
		if (status === "sent"){
			return " hidden"
		}else{
			return ""
		}
	}


	return (
		<svg width="18" height="11" viewBox="0 0 31 24" className={"inline-block absolute right-[1px] bottom-[2px]"}
			 fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M22.9725 1.95731C22.5188 1.64243 21.8959 1.75483 21.5809 2.20838L10.3062 18.443C9.97373 18.9218 9.30394 19.0159 8.85244 18.6473L2.19739 13.214C1.7695 12.8647 1.13941 12.9285 0.790186 13.3564L0.632049 13.5502C0.282951 13.9781 0.346688 14.6079 0.774423 14.9571L9.31391 21.9289C9.76541 22.2975 10.4352 22.2034 10.7677 21.7246L23.4295 3.49211C23.7445 3.03841 23.6321 2.4152 23.1783 2.10022L22.9725 1.95731Z"
				fill={color()}/>
			<path
				className={hasSent()}
				d="M29.9725 1.95731C29.5188 1.64243 28.8959 1.75483 28.5809 2.20838L17.3062 18.443C16.9737 18.9218 16.3039 19.0159 15.8524 18.6473L9.19739 13.214C8.7695 12.8647 8.13941 12.9285 7.79019 13.3564L7.63205 13.5502C7.28295 13.9781 7.34669 14.6079 7.77442 14.9571L16.3139 21.9289C16.7654 22.2975 17.4352 22.2034 17.7677 21.7246L30.4295 3.49211C30.7445 3.03841 30.6321 2.4152 30.1783 2.10022L29.9725 1.95731Z"
				fill={color()}/>
		</svg>
	)
}

export default Tick