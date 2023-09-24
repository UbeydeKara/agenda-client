import {Card, Form, Stack, TextField, Typography, Button} from "../components";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {
    loginFormSchema, loginInitialValues,
    registerFormSchema,
    registerInitialValues
} from "../constants";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {ReactComponent as ChecklistSvg} from "../static/login.svg"
import {useMemo} from "react";
import {useAppDispatch} from "../redux/hooks";
import {login, register} from "../redux/actions/AuthAction";

function Login() {
    const location = useLocation();
    const isLogin = location.pathname === "/login";
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const registerMethods = useForm({
        resolver: yupResolver(registerFormSchema),
        defaultValues: registerInitialValues,
        mode: "all"
    });

    const loginMethods = useForm({
        resolver: yupResolver(loginFormSchema),
        defaultValues: loginInitialValues,
        mode: "all"
    });

    const handleLogin = (values: any) => {
        dispatch(login(values.username, values.password)).then(() => navigate("/list/upcoming"))
    };

    const handleRegister = (values: any) => {
        dispatch(register(values.username, values.email, values.password)).then(() => navigate("/login"))
    };

    const loginStack = useMemo(() => {
        return(
            <Form className="w-1/4" methods={loginMethods} onSave={handleLogin}>
                <Stack spacing={4}>
                    <Typography variant="h1">
                        Giriş yap
                    </Typography>
                    <TextField name="username" placeholder="Kullanıcı Adınız"/>
                    <TextField name="password" type="password" placeholder="Parolanız"/>
                    <Button type="submit">Giriş</Button>
                    <Typography variant="p">
                        Mevcut hesabınız yok ise&nbsp;
                        <Link to="/register" className="underline">
                            hesap oluşturun.
                        </Link>
                    </Typography>
                </Stack>
            </Form>
        )
    }, []);

    const registerStack = useMemo(() => {
        return(
            <Form className="w-1/4" methods={registerMethods} onSave={handleRegister}>
                <Stack spacing={4}>
                    <Typography variant="h1">
                        Hesap Oluştur
                    </Typography>
                    <TextField name="username" placeholder="Kullanıcı Adınız"/>
                    <TextField name="email" placeholder="E-posta Adresiniz"/>
                    <TextField name="password" type="password" placeholder="Parolanız" autoComplete="new-password"/>
                    <Button type="submit">Oluştur</Button>
                    <Typography variant="p">
                        Mevcut bir hesabınız var ise&nbsp;
                        <Link to="/login" className="underline">
                            giriş yapın.
                        </Link>
                    </Typography>
                </Stack>
            </Form>
        )
    }, []);

    return(
        <Stack direction="row" className="w-full h-screen" itemsCenter justifyCenter spacing={24}>
            <Card className="w-1/3 rounded-3xl shadow-xl">
                <ChecklistSvg/>
            </Card>
            {isLogin ? loginStack : registerStack}
        </Stack>
    )
}

export default Login;
