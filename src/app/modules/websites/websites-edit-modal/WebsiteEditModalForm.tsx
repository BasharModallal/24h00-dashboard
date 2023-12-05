import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {initialWebsite, Website} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {WebsitesListLoading} from '../components/loading/WebsitesListLoading'
import {createWebsite, updateWebsite} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'

type Props = {
  isWebsiteLoading: boolean
  website: Website
}

const editWebsiteSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Name is required'),
})

const WebsiteEditModalForm: FC<Props> = ({website, isWebsiteLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [websiteForEdit] = useState<Website>({
    ...website,
    name: website.name || initialWebsite.name,
    url: website.url || initialWebsite.url,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const formik = useFormik({
    initialValues: websiteForEdit,
    validationSchema: editWebsiteSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateWebsite(values)
        } else {
          await createWebsite(values)
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
      <form id='kt_modal_add_website_form' className='form' onSubmit={formik.handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_website_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_website_header'
          data-kt-scroll-wrappers='#kt_modal_add_website_scroll'
          data-kt-scroll-offset='300px'
        >

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Website Name</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='Full name'
              {...formik.getFieldProps('name')}
              type='text'
              name='name'
              className={clsx(
                'form-control form-control-sm form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.name && formik.errors.name},
                {
                  'is-valid': formik.touched.name && !formik.errors.name,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isWebsiteLoading}
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

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>URL</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='Web address URL'
              {...formik.getFieldProps('url')}
              className={clsx(
                'form-control form-control-sm form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.url && formik.errors.url},
                {
                  'is-valid': formik.touched.url && !formik.errors.url,
                }
              )}
              type='url'
              name='url'
              // autoComplete='off'
              disabled={formik.isSubmitting || isWebsiteLoading}
            />
            {/* end::Input */}
            {formik.touched.url && formik.errors.url && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.url}</span>
              </div>
            )}
          </div>
          {/* end::Input group */}

        </div>
        {/* end::Scroll */}

        {/* begin::Actions */}
        <div className='text-center pt-10 pb-0'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-sm btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isWebsiteLoading}
          >
            Discard
          </button>

          <button
            type='submit'
            className='btn btn-sm btn-primary'
            data-kt-users-modal-action='submit'
            disabled={isWebsiteLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isWebsiteLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isWebsiteLoading) && <WebsitesListLoading />}
    </>
  )
}

export {WebsiteEditModalForm}
