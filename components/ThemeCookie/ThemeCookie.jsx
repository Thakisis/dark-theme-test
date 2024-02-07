
import { getCookieTheme } from "@/serverLib"


async function ThemeClient(props) {
    const cookie = await getCookieTheme()

    return (
        <div>
            theme: {cookie}
        </div>
    )
}

export default ThemeClient

