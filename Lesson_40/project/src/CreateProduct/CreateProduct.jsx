import { useForm } from 'react-hook-form';
import './CreateProduct.css';

export default function CreateProduct (props) {

    const form = useForm();
    const { 
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        props.addNewProduct(data);
    };

    return (
        <div className='create-form'>
          <form className='form-box' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
                <label 
                  htmlFor='title' 
                  className='form-label'>Name of product
                </label>
                <input 
                  id='title' 
                  className='form-control'
                  placeholder='Name of product'
                  {... register( 'title', {required: 'Product name not entered'} )} 
                />
                {errors.title && (<div className='errors'>{errors.title.message}</div>)} 
            </div>
            <div className='mb-3'>
                <label 
                  htmlFor='price' 
                  className='form-label'>Price of product
                </label>
                <input 
                  type='number' 
                  id='price' 
                  className='form-control' 
                  placeholder='Price of product'
                  { ... register( 'price', {required: 'Enter price of this product'} ) } 
                /> 
                {errors.price && (<div className='errors'>{errors.price.message}</div>)} 
            </div>
            <div className='mb-3'>
                <input 
                  type='file' 
                  className='form-control' { ... register ( 'thumbnail' ) } 
                /> 
            </div>
            <input type='submit' value="Send"/>
          </form>  
        </div>
    );
};