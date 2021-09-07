import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { MdDelete, MdEmail, MdAddAPhoto } from 'react-icons/md'
import { AiOutlineClose, AiTwotoneEdit } from 'react-icons/ai'
import { HiUserGroup } from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Button from '../../components/common/buttons/Button'
import LoadingOverlay from '../../components/common/LoadingOverlay'
import LoadingIndicator from '../../components/Admin/Layout/LoadingIndicator'
import { useGetNotices } from '../../queries/useGetNotice'
import { NoticeEndpoints } from '../../pages/api/notice'
import Swal from 'sweetalert2'

const AdminUsers = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ offset: 0, duration: 1000 })
  }, [])
  const { data: notices, isSuccess } = useGetNotices()
  const [showLoading, setShowLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalAction, setModalAction] = useState('Add')
  const [editingNoticeId, setEditingNoticeId] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    category: '',
    photo: '',
  })

  const toggleModal = () => {
    setShowModal((prev) => !prev)
  }

  const handleInputChange = (e: ChangeEvent<any>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange =
    () => (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }

  const encodeImage = (fileInput: any) => {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (e: any) => {
        const image = new Image()
        image.src = e.target.result
        image.onload = () => {
          const imgBase64Path = e.target.result
          setFormData({
            ...formData,
            [fileInput.target.name]: imgBase64Path.split(',')[1],
          })
        }
      }
      reader.readAsDataURL(fileInput.target.files[0])
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowLoading(true)
    if (modalAction == 'Add') {
      NoticeEndpoints.addNotice(formData)
        .then(() => {
          setShowLoading(false)
          toggleModal()
          clearFormData()
          let timerInterval: any
          Swal.fire({
            heightAuto: false,
            icon: 'success',
            title: `<div class="text-2xl">Notice Added sucessfully!</div>`,
            showConfirmButton: false,
            timer: 1500,
            willClose: () => {
              clearInterval(timerInterval)
            },
          }).then(() => {
            if (process.browser) {
              window.location.reload()
            }
          })
        })
        .catch((e) => {
          const error = JSON.parse(e).data.error
          let errorMessage = 'Failed to add notice'
          if (error) {
            switch (true) {
              case error.includes('Path `title` is required.'):
                errorMessage = 'Please enter a notice title'
                break
              case error.includes('Path `body` is required.'):
                errorMessage = 'Please enter a notice body'
                break
              case error.includes('Path `category` is required.'):
                errorMessage = 'Please select a category'
                break
              default:
                errorMessage = error
                break
            }
          }
          setShowLoading(false)
          Swal.fire({
            icon: 'error',
            heightAuto: false,
            title: `<div class="text-2xl">${errorMessage}</div>`,
            showConfirmButton: false,
            timer: 1500,
          })
        })
    } else {
      NoticeEndpoints.editNotice(editingNoticeId, formData)
        .then(() => {
          setShowLoading(false)
          toggleModal()
          clearFormData()
          let timerInterval: any
          Swal.fire({
            heightAuto: false,
            icon: 'success',
            title: `<div class="text-2xl">Notice edited sucessfully!</div>`,
            showConfirmButton: false,
            timer: 1500,
            willClose: () => {
              clearInterval(timerInterval)
            },
          }).then(() => {
            if (process.browser) {
              window.location.reload()
            }
          })
        })
        .catch((e) => {
          const error = JSON.parse(e).data.error
          setShowLoading(false)
          Swal.fire({
            icon: 'error',
            heightAuto: false,
            title: `<div class="text-2xl">${error}</div>`,
            showConfirmButton: false,
            timer: 1500,
          })
        })
    }
  }

  const clearFormData = () => {
    setFormData({
      title: '',
      body: '',
      category: '',
      photo: '',
    })
  }

  const deleteNotice = (noticeId: string) => {
    setShowLoading(true)
    NoticeEndpoints.deleteNotice(noticeId)
      .then(() => {
        setShowLoading(false)
        let timerInterval: any
        Swal.fire({
          heightAuto: false,
          icon: 'success',
          title: `<div class="text-2xl">Notice removed sucessfully!</div>`,
          showConfirmButton: false,
          timer: 1500,
          willClose: () => {
            clearInterval(timerInterval)
          },
        }).then(() => {
          if (process.browser) {
            window.location.reload()
          }
        })
      })
      .catch((e) => {
        const error = JSON.parse(e).data.error
        setShowLoading(false)
        Swal.fire({
          icon: 'error',
          heightAuto: false,
          title: `<div class="text-2xl">${error}</div>`,
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }

  return (
    <>
      <LoadingOverlay show={showLoading} />
      <section
        className="p-4 sm:p-5 md:h-full min-h-84vh"
        onClick={showModal ? toggleModal : () => null}
      >
        <div
          className={`bg-black fixed w-full h-full top-0 left-0 z-20 transition ease-in duration-200 pointer-events-none ${
            showModal ? 'opacity-50' : 'opacity-0 '
          }`}
        ></div>
        {isSuccess && notices ? (
          <>
            <div
              className="w-auto px-6 mt-4 mb-10 py-2 rounded-lg bg-fcsc-blue lg:opacity-0 cursor-default lg:h-0 lg:m-0 lg:p-0"
              data-aos="fade-right"
            >
              <div className="text-2xl text-white font-semibold text-left ">
                Notices
              </div>
            </div>
            <div
              className="inline-flex items-center justify-end w-full mb-8 pr-4 lg:pr-0"
              data-aos="fade-left"
            >
              <Button
                value="Add Notice"
                onClick={() => {
                  clearFormData()
                  setModalAction('Add')
                  toggleModal()
                }}
              />
            </div>
            <div
              className="hidden md:grid md:grid-rows-1 md:grid-cols-10 md:gap-4 bg-gradient-to-l from-fcsc-blue to-fcsc-blue_light font-medium text-lg text-white p-4 md:px-8 rounded-t-xl shadow-lg mb-3"
              data-aos="fade-right"
            >
              <h3 className="md:col-span-2">Title</h3>
              <h3 className="md:col-span-3">Body</h3>
              <h3 className="md:col-span-3">Category</h3>
              <div className="md:col-span-1" />
            </div>
            {notices.length != 0 ? (
              <div className="flex flex-col space-y-2 md:max-h-65vh pb-4 md:overflow-y-scroll scrollbar-hide">
                {notices.map(({ _id, title, body, category, photo }, i) => {
                  const editAction = () => {
                    setEditingNoticeId(_id)
                    setFormData({
                      title: title,
                      body: body,
                      category: category,
                      photo: photo,
                    })
                    toggleModal()
                    setModalAction('Edit')
                  }

                  return (
                    <div
                      key={i}
                      className="grid grid-rows-1 grid-cols-1 sm:grid-cols-4 md:grid-cols-10 gap-2 sm:gap-4 rounded-sm shadow-lg p-4 md:px-8 justify-center items-center"
                      data-aos={i % 2 == 1 ? 'fade-right' : 'fade-left'}
                    >
                      <p className="sm:col-span-3 md:col-span-2 font-semibold text-xl md:text-base text-gray-700">
                        {title}
                      </p>
                      <div className="sm:col-span-3 md:col-span-3 flex flex-row justify-start items-center">
                        <div className="w-27 md:w-0 md:h-0 mr-4 md:mr-0">
                          <MdEmail
                            className="text-gray-700 hover:text-fcsc-blue_light transition ease-in duration-200 md:w-0 md:h-0 "
                            size={27}
                          />
                        </div>
                        <p
                          className="font-medium text-gray-700 w-3/4 md:w-full"
                          style={{ wordWrap: 'break-word' }}
                        >
                          {body}
                        </p>
                      </div>

                      <div className="sm:col-span-2 md:col-span-3 flex flex-row justify-start items-end">
                        <HiUserGroup
                          className="text-gray-700 hover:text-fcsc-blue_light transition ease-in duration-200 md:w-0 md:h-0 mr-4 md:mr-0"
                          size={26}
                        />
                        <p className="font-medium text-md md:text-base text-gray-700">
                          {category}
                        </p>
                      </div>
                      <button
                        className="col-span-1 lg:col-span-1 hidden lg:flex items-center justify-center outline-none"
                        onClick={editAction}
                      >
                        <AiTwotoneEdit
                          className="text-lg text-gray-700 hover:text-green-500 transition ease-in duration-200"
                          size={32}
                        />
                      </button>
                      <button
                        className="md:col-span-1 py-2 mt-2 mb-1 rounded-md bg-fcsc-blue hover:bg-fcsc-blue_light text-white transition ease-in flex md:hidden items-center justify-center outline-none"
                        onClick={editAction}
                      >
                        Edit
                      </button>
                      <button
                        className="sm:col-span-1 md:col-span-1 md:flex hidden items-center justify-center outline-none"
                        onClick={deleteNotice.bind(this, _id)}
                      >
                        <MdDelete
                          className="text-lg hidden md:block text-gray-700 hover:text-red-500 transition ease-in duration-200"
                          size={32}
                        />
                      </button>
                      <button
                        className="md:col-span-1 py-2 rounded-md bg-fcsc-blue hover:bg-fcsc-blue_light text-white transition ease-in flex md:hidden items-center justify-center outline-none"
                        onClick={deleteNotice.bind(this, _id)}
                      >
                        Remove
                      </button>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div
                className="font-inter font-semibold text-xl lg:text-2xl text-center mt-25vh lg:mt-30vh mb-20 px-8 text-gray-800"
                data-aos="fade-left"
              >
                There are no notices at the moment.
              </div>
            )}
          </>
        ) : (
          <div className="h-84vh-32">
            <LoadingIndicator />
          </div>
        )}
      </section>
      {showModal && (
        <div className="fixed z-40 top-0 bottom-0 right-0 left-0 w-full h-full pointer-events-none">
          <form
            method="post"
            onSubmit={handleSubmit}
            className="absolute z-50 top-1/2 left-1/2 md:left-6/10 transform -translate-x-1/2 -translate-y-1/2 bg-white w-72 md:w-96 mx-auto md:mx-0 rounded-lg p-4 px-6 pointer-events-auto"
          >
            <div className="inline-flex items-center justify-end w-full mb-4">
              <div onClick={toggleModal}>
                <div className="cursor-pointer transform hover:scale-105 transition ease-in duration-100 fill-current text-fcsc-blue hover:text-gray-800">
                  <AiOutlineClose size={30} />
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-center w-full mb-6">
              <div className="font-semibold text-2xl sm:text-2xl text-fcsc-blue">
                {`${modalAction} Notice`}
              </div>
            </div>
            <button className="w-full h-full rounded-md shadow-ds2 relative mb-2">
              <input
                type="file"
                id="photo"
                name="photo"
                className="absolute left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={encodeImage}
                disabled={false}
              ></input>
              {formData.photo ? (
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <img
                    className="object-cover"
                    src={
                      formData.photo.includes(
                        'https://firebasestorage.googleapis.com'
                      )
                        ? formData.photo
                        : `data:image/jpeg;base64,${formData.photo}`
                    }
                    alt="speakerImage"
                  ></img>
                </div>
              ) : (
                <div className="h-full w-full flex flex-col justify-center items-center p-8">
                  <MdAddAPhoto
                    className="fill-current-color text-gray-400"
                    size={80}
                  />
                  <div className="mt-4 text-lg text-gray-400 font-semibold">
                    Add Notice Photo
                  </div>
                </div>
              )}
            </button>
            <input
              onChange={handleInputChange}
              className="rounded-md mb-2 py-2 px-3 shadow-ds2 border-0 placeholder-gray-400 w-full"
              placeholder="Title"
              type="text"
              name="title"
              value={formData.title}
            />
            <textarea
              onChange={handleInputChange}
              className="rounded-md mb-2 py-2 px-3 shadow-ds2 border-0 placeholder-gray-400 w-full"
              placeholder="Body"
              name="body"
              value={formData.body}
              rows={4}
            ></textarea>
            <select
              className="rounded-md mb-6 py-2 px-2 shadow-ds2 border-0 placeholder-gray-400 w-full"
              name="category"
              onChange={handleSelectChange()}
              value={formData.category}
            >
              <option
                value=""
                disabled
                selected
                className="fill-current-color text-gray-400"
              >
                Category
              </option>
              <option value="Latest">Latest</option>
              <option value="Older">Older</option>
            </select>
            <Button value={modalAction} width="w-full" type="submit" />
            <div className="h-4"></div>
          </form>
        </div>
      )}
    </>
  )
}

export default AdminUsers
