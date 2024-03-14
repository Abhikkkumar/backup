function HeaderItem({ Name, Icon }) {
  return (
    <div
      className="text-white flex items-center gap-3 text-[1rem] font-semibold cursor-pointer 
    hover:underline underline-offset-8"
    >
      <Icon />
      <h2>{Name}</h2>
    </div>
  );
}

export default HeaderItem;
