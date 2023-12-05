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
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  name: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Name is required'),
})

const BrandEditModalForm: FC<Props> = ({ brand, isBrandLoading }) => {
  const { setItemIdForUpdate } = useListView()
  const { refetch } = useQueryResponse()

  const [brandForEdit] = useState<Brand>({
    ...brand,
    images: brand.images || initialBrand.images,
    name: brand.name || initialBrand.name,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  const brandAvatarImg = toAbsoluteUrl(`/media/${brandForEdit.images?.[0]}`)

  const formik = useFormik({
    initialValues: brandForEdit,
    validationSchema: editBrandSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true)
      alert(JSON.stringify(values, null, 2));

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
      <form id='kt_modal_add_brand_form' className='form' onSubmit={formik.handleSubmit} noValidate>
        {/* begin::Scroll */}
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
          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='d-block fw-bold fs-6 mb-5'>Avatar</label>
            {/* end::Label */}

            {/* begin::Image input */}
            {/* begin::Input group for image upload */}
            <div className='fv-row mb-7'>
              {/* begin::Label */}
              <label className='d-block fw-bold fs-6 mb-5'>Avatar</label>
              {/* end::Label */}

              {/* begin::Image input */}
              <div
                className='image-input image-input-outline'
                data-kt-image-input='true'
                style={{ backgroundImage: `url('${blankImg}')` }}
              >
                {/* begin::Preview existing avatar */}
                <div
                  className='image-input-wrapper w-125px h-125px'
                  style={{ backgroundImage: `url('${formik.values.images ? URL.createObjectURL("sadd") : brandAvatarImg}')` }}
                ></div>
                {/* end::Preview existing avatar */}

                {/* begin::Input */}
                <input
                  type="file"  // Add this line to support file uploads
                  name="images"  // Set the name attribute to identify the file in the request body
                  accept="image/*"  // Add this line to specify that only image files are allowed
                  onChange={(event: any) => {
                    formik.setFieldValue("images", event.currentTarget.files[0]);
                  }}
                />
                {/* end::Input */}
              </div>
            </div>
            {/* end::Inp
            {/* end::Input group */}

            {/* begin::Input group */}
            <div className='fv-row mb-7'>
              {/* begin::Label */}
              <label className='required fw-bold fs-6 mb-2'>Name</label>
              {/* end::Label */}

              {/* begin::Input */}
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
              {/* end::Input */}
            </div>
            {/* end::Input group */}

          </div>
          {/* end::Scroll */}

          {/* begin::Actions */}
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
          {/* end::Actions */}
        </div>
      </form>
      {(formik.isSubmitting || isBrandLoading) && <BrandsListLoading />}
    </>
  )
}

export { BrandEditModalForm }
