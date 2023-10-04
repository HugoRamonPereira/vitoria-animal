import Image from 'next/image';
import logo from '../../assets/images/vitória_animal.png';
import Link from 'next/link';

export function Header() {
  return (
    <div className='w-full bg-emerald-500'>
      <header className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Image src={logo} alt='logo' width={70} />
          <p>Vitória Animal</p>
        </div>
        <div className='flex gap-5'>
          <Link href='/info'>Info</Link>
          <Link href='/galeria'>Galeria</Link>
          <Link href='/parcerias'>Parcerias</Link>
          <Link href='/contato'>Contato</Link>
        </div>
      </header>
    </div>
  )
}