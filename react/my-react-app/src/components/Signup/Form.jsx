import React, { useState } from "react";

export default function Form() {
	const [selectedLevel, setSelectedLevel] = useState("");
	const [form, setForm] = useState({
		email: "",
		password: "",
		passwordConfirm: "",
	});

	const levels = [
		{ id: 1, value: "신입" },
		{ id: 2, value: "주니어" },
		{ id: 3, value: "시니어" },
	];

	function handleRadioChange(e) {
		setSelectedLevel(e.target.value);
		console.log(e.target.value);
	}

	function handleChange(e) {
		const { name, value } = e.target;

		// setForm({ ...form, [name]: value });
		setForm((prev) => ({ ...prev, [name]: value }));
		console.log(name, value);
	}

	function handleSubmit(e) {
		e.preventDefault(); //새로고침 방지
		const pwd = form.password;
		const pwdConfirm = form.passwordConfirm;

		alert(
			pwd !== pwdConfirm
				? "비밀번호가 다릅니다.\n 다시 확인해 주세요."
				: "회원가입을 완료했습니다."
		);
	}

	return (
		<div className="flex justify-center p-5">
			<form onSubmit={(e) => handleSubmit(e)}>
				<h2 className="text-3xl text-center font-bold">회원가입</h2>
				<p className="mt-2">이메일</p>
				<input
					className="border-2"
					type="email"
					name="email"
					placeholder="이메일"
					value={form.email}
					onChange={(e) => handleChange(e)}
					required
				/>
				<p className="mt-2">비밀번호</p>
				<input
					className="border-2"
					type="password"
					name="password"
					placeholder="비밀번호"
					value={form.password}
					onChange={(e) => handleChange(e)}
					required
				/>
				<p className="mt-2">비밀번호 확인</p>
				<input
					className="border-2"
					type="password"
					name="passwordConfirm"
					placeholder="비밀번호 확인"
					value={form.passwordConfirm}
					onChange={(e) => handleChange(e)}
					required
				/>

				<p className="mt-2">레벨</p>
				<div>
					{levels.map((level) => (
						<label key={level.id}>
							<input
								type="radio"
								name="level"
								value={level.value}
								checked={selectedLevel === level.value}
								onChange={(e) => {
									handleRadioChange(e);
								}}
								required
							/>
							{level.value}
						</label>
					))}
				</div>
				<button
					type="submit"
					className="border-2 w-45 bg-blue-600 text-white cursor-pointer"
				>
					회원가입
				</button>
			</form>
		</div>
	);
}
