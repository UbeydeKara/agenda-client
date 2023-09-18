import {Card, Form, Stack, TextField, Typography, Button} from "../components";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {stickyFormSchema, stickyInitialValues} from "../constants";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {ReactComponent as ChecklistSvg} from "../static/login.svg"
import {useMemo} from "react";

function Login() {
    const location = useLocation();
    const isLogin = location.pathname === "/login";
    const navigate = useNavigate();

    const methods = useForm({
        resolver: yupResolver(stickyFormSchema),
        defaultValues: stickyInitialValues,
        mode: "all"
    });

    const handleLogin = () => {
        navigate("/list/upcoming")
    };

    const loginStack = useMemo(() => {
        return(
            <Stack spacing={4}>
                <Typography variant="h1">
                    Giriş yap
                </Typography>
                <TextField name="email" placeholder="E-posta Adresiniz"/>
                <TextField name="password" placeholder="Parolanız"/>
                <Button onClick={handleLogin}>Giriş</Button>
                <Typography variant="p">
                    Mevcut hesabınız yok ise&nbsp;
                    <Link to="/register" className="underline">
                        hesap oluşturun.
                    </Link>
                </Typography>
            </Stack>
        )
    }, []);

    const registerStack = useMemo(() => {
        return(
            <Stack spacing={4}>
                <Typography variant="h1">
                    Hesap Oluştur
                </Typography>
                <TextField name="username" placeholder="Kullanıcı Adınız"/>
                <TextField name="email" placeholder="E-posta Adresiniz"/>
                <TextField name="password" placeholder="Parolanız"/>
                <Button>Oluştur</Button>
                <Typography variant="p">
                    Mevcut bir hesabınız var ise&nbsp;
                    <Link to="/login" className="underline">
                        giriş yapın.
                    </Link>
                </Typography>
            </Stack>
        )
    }, []);

    return(
        <Stack direction="row" className="w-full h-screen" itemsCenter justifyCenter spacing={24}>
            <Card className="w-1/3 rounded-3xl shadow-xl">
                <ChecklistSvg/>
            </Card>
            <Form className="w-1/4" methods={methods} onSave={handleLogin}>
                {isLogin ? loginStack : registerStack}
            </Form>
        </Stack>
    )
}

export default Login;
