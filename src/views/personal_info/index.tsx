import MoImage from 'components/image/Image'
import { StyledAvatar } from 'components/styled/Styled'



const PersonalInfo = () => {
    return (
        <div>
            <div className='bg-white w-full h-[158px] border border-[#E6E9ED] flex py-[17px] px-[13px]'>
                <div>
                    <StyledAvatar size={90} icon={<MoImage height={90} src="" />} />
                </div>
                <div className=' flex flex-col pl-[10px]'>
                    <div className='text-[25px]'>
                        Sukanya_admin
                    </div>

                    <div className='text-[#868E96]'>
                        เข้าร่วมเมื่อ 10 ธ.ค. 2555
                    </div>
                    <div>
                        <span className='text-[#868E96]'>
                            Membership :{" "}
                        </span>
                        <span>
                            เจ้าหน้าที่
                        </span>

                    </div>

                </div>

            </div>

            <div className="grid grid-cols-12 gap-4 mt-[30px]">

                <div className="col-span-3 rounded-[5px]">
                    <div className=' bg-white w-full h-[265px]'>
                        <div className='flex flex-col'>
                            <div>
                                ตั้งค่า
                            </div>
                            <div>
                                c
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-span-9  rounded-[5px]">
                    <div className=' bg-white w-full'>
                        a
                    </div>
                </div>
            </div>



        </div>
    )
}

export default PersonalInfo