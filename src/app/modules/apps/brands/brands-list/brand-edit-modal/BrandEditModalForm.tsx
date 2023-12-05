import { FC, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { isNotEmpty, toAbsoluteUrl } from '../../../../../../_metronic/helpers'
import { initialBrand, Brand } from '../core/_models'
import clsx from 'clsx'
import { useListView } from '../core/ListViewProvider'
import { BrandsListLoading } from '../components/loading/BrandsListLoading'
import { createBrand, updateBrand } from '../core/_requests'
import { useQueryResponse } from '../core/QueryResponseProvider'

type Props = {
  isBrandLoading: boolean
  brand: Brand
}

const editBrandSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Name is required'),
  image: Yup.mixed().test("fileSize", "The file is too large", (value) => {
    // if (!value?.length) return true; // attachment is optional
    // return value?.[0].size && value?.[0].size <= 2000000;
    return true;
  }),
});

const BrandEditModalForm: FC<Props> = ({ brand, isBrandLoading }) => {
  const { setItemIdForUpdate } = useListView()
  const { refetch } = useQueryResponse()

  const [brandForEdit] = useState<Brand>({
    ...brand,
    image: brand.image || initialBrand.image,
    name: brand.name || initialBrand.name,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  const brandAvatarImg = toAbsoluteUrl(`/media/${brandForEdit.image}`)

  const formik = useFormik({
    initialValues: brandForEdit,
    validationSchema: editBrandSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true)
      // alert(JSON.stringify(values, null, 2));

      try {
        if (isNotEmpty(values.id)) {
          await updateBrand(values)
        } else {
          await createBrand(values)
        }
      } catch (ex) {
        console.error(ex)
      } finally {
        setSubmitting(true)
        cancel(true)
      }
    },
  })

  return (
    <>
      <form id='kt_modal_add_brand_form' className='form' encType="multipart/form-data" onSubmit={formik.handleSubmit} noValidate>
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_brand_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_brand_header'
          data-kt-scroll-wrappers='#kt_modal_add_brand_scroll'
          data-kt-scroll-offset='300px'
        >
          <div className='fv-row mb-7'>
            <label className='d-block fw-bold fs-6 mb-5'>Image</label>

            <div className='fv-row mb-7'>
              <label className='d-block fw-bold fs-6 mb-5'>Image</label>
              <div
                className='image-input image-input-outline'
                data-kt-image-input='true'
                style={{ backgroundImage: `url('${blankImg}')` }}
              >
                <input id="image" name="image" type="file" onChange={(event) => {
                  formik.setFieldValue("image", event.currentTarget.files?.[0]);
                }} />
              </div>
            </div>
            <div className='fv-row mb-7'>
              <label className='required fw-bold fs-6 mb-2'>Name</label>

              <input
                placeholder='Brand name'
                {...formik.getFieldProps('name')}
                type='text'
                name='name'
                className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  { 'is-invalid': formik.touched.name && formik.errors.name },
                  {
                    'is-valid': formik.touched.name && !formik.errors.name,
                  }
                )}
                autoComplete='off'
                disabled={formik.isSubmitting || isBrandLoading}
              />
              {formik.touched.name && formik.errors.name && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.name}</span>
                  </div>
                </div>
              )}
            </div>

          </div>

          <div className='text-center pt-15'>
            <button
              type='reset'
              onClick={() => cancel()}
              className='btn btn-light me-3'
              data-kt-brands-modal-action='cancel'
              disabled={formik.isSubmitting || isBrandLoading}
            >
              Discard
            </button>

            <button
              type='submit'
              className='btn btn-primary'
              data-kt-brands-modal-action='submit'
              disabled={isBrandLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
            >
              <span className='indicator-label'>Submit</span>
              {(formik.isSubmitting || isBrandLoading) && (
                <span className='indicator-progress'>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </div>
      </form>
      {(formik.isSubmitting || isBrandLoading) && <BrandsListLoading />}
    </>
  )
}

export { BrandEditModalForm }
