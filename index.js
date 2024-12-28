let f = {
	addProduct : (obj) => {
		document.querySelector("c-part.products").insertAdjacentHTML(
			"afterbegin",
			`
			<c-part class="product">
				<c-part class="product-thumbnail" ${!!obj.image ? `
					style="background-image: url(${obj.image});"
					` : ""}></c-part>
				<c-part class="product-detail">
					<c-part class="p-title">${obj.title || "-"}</c-part>
					<c-part class="p-provider">
						<svg viewBox="0 0 128 112">
							<path d="M120 56c0 30.9-25.1 56-56 56S8 86.9 8 56 33.1 0 64 0s56 25.1 56 56z"
								fill="#d8f8f1" />
							<path clip-rule="evenodd"
								d="M64 104c26.5 0 48-21.5 48-48S90.5 8 64 8 16 29.5 16 56s21.5 48 48 48zm0 8c30.9 0 56-25.1 56-56S94.9 0 64 0 8 25.1 8 56s25.1 56 56 56z"
								fill="#3c7d70" fill-rule="evenodd" />
							<image height="79" opacity=".3" overflow="visible" transform="translate(30 18)"
								width="73"
								xlink:href="data:image/png;base64,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 5iIi/wGxgnu3uNOPIwAAAABJRU5ErkJggg==" />
							<image height="67" overflow="visible" transform="translate(37 24)" width="60"
								xlink:href="data:image/png;base64,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 RK5CYII=" />
							<path
								d="M43 84.6h12V67.1h9.4l11.7 17.5h14L76.9 65.1c6.9-2.6 11.7-8.1 11.7-16.9V48c0-5.1-1.6-9.4-4.7-12.5C80.3 32 74.9 30 68 30H43zm12-28.1V40.8h11.9c5.8 0 9.4 2.7 9.4 7.8v.2c0 4.6-3.4 7.7-9.2 7.7z"
								fill="#3c7d70" />
						</svg>
						<div>${obj.provider || "-"}</div>
					</c-part>
					<c-part class="p-btm-flex">
						<c-part class="p-star">
							<svg viewBox="0 0 24 24" fill="none">
								<path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"/>
							</svg>
							${!!obj.evaluation ? `
							<span class="score">${obj.evaluation.score}</span>
							<span class="number">(${obj.evaluation.number})</span>
							` : "-"}
						</c-part>
						<c-part class="p-price">
							<div>${!!obj.price ? obj.price.toLocaleString() : "-"}</div>
							<div>円</div>
						</c-part>
					</c-part>
				</c-part>
			</c-part>
			`
		)
	},
	cache : null,
	addSampleProducts : async () => {
		let samples = await (await fetch("./sample-products.json")).json();
		if(!samples) return false;
		f.cache = samples[samples.length - 1];
		samples.forEach(sample => {
			f.addProduct(sample);
		});
	},
	sync : async (type, value) => {
		let d = document.querySelectorAll("c-part.product")[0];
		switch(type){
			case "title":
				if(!(!!value)) value = f.cache.title;
				d.children[1].children[0].textContent = value;
				break;
			case "provider":
				if(!(!!value)) value = f.cache.provider;
				d.children[1].children[1].children[1].textContent = value;
				break;
			case "price":
				if(!(!!value)) value = f.cache.price;
				if(/^[0-9]+$/.test(value))
					d.children[1].children[2].children[1].children[0].textContent = Number(value).toLocaleString();
				break;
			case "image":
				if(!!value){
					value = await new Promise((resolve) => {
						let rd = new FileReader();
						rd.onload = () => {
							resolve(rd.result);
						}
						rd.readAsDataURL(value);
					});
				}else{
					value = f.cache.image;
				}
				d.children[0].style.backgroundImage = !!value ? `url(${value})` : "";
				break;
		}
	},
	load : () => {
		document.querySelectorAll("input").forEach((d) => {
			d.onkeyup = (e) => {
				f.sync(
					e.target.parentNode.getAttribute("data-value"),
					e.target.value
				);
				!!e.target.value ?
				e.target.parentNode.classList.add("inputed") : 
				e.target.parentNode.classList.remove("inputed")
			};
			if(d.parentNode.getAttribute("data-value") == null){
				d.onchange = (e) => {
					f.sync("image", e.target.files[0]);
				}
			}else{
				d.onfocus = (e) => {
					e.target.parentNode.classList.add("focus");
				};
				d.onblur = (e) => {
					e.target.parentNode.classList.remove("focus");
				};
			};
		});
		document.querySelectorAll("t-part.input-label").forEach((d) => {
			d.onclick = (e) => {
				e.target.parentNode.children[1].focus();
			};
		});
		f.addSampleProducts();
	}
};