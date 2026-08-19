import { useContext } from "react"
import { useNavigate } from "react-router"
import { myClientContext } from "../context/ClientContext"
import { useForm } from "react-hook-form"
import { createClient, updateClientFun } from "../api/clientData"
import { toast } from "react-toastify"

export const clientFormHook = () => {

    const navigate = useNavigate()
    const { updateClient, setUpdateClient , fetchData } = useContext(myClientContext)

    let {
        register,
        handleSubmit,
        reset,
        formState: { errors } } = useForm({
            mode: 'onChange',
            defaultValues: {
                name: updateClient?.name,
                age: updateClient?.age,
                id: updateClient?.id,
                profession: updateClient?.profession,

            }
        })

    // call the api 
    const clientData = async (data) => {

        //create logic 

        if (!updateClient) {
            try {
                data = { ...data, id: Date.now() }
                let result = await createClient(data)
                console.log("form result", result);
                toast.success(`Client Created !`)
                fetchData()
            } catch (error) {
                console.log('form error', error);

            }
        }
        else {
            // update logic 
            try {

                let result = await updateClientFun(data)
                console.log("Card edit result", result)
                setUpdateClient(null)
                toast.success('Updated Succesfully !')
                fetchData()
            } catch (error) {
                console.log('Card edit error', error);
            }

        }
        reset()
        navigate('/clients')
    }

    return {

        navigate,
        register,
        reset,
        errors,
        handleSubmit,
        clientData,
    }
}