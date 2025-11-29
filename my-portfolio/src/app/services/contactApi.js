const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const sendContactMessage = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    return res.json();
  } catch {
    return { ok: false, msg: "Server unreachable, please try again later." };
  }
};
