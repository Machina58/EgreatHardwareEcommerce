
const CategoryName = ({ categoryfield, categoryChange }) => {
  return (
    <div className='categoryLine'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search products'
        onChange={categoryChange}
      />
    </div>
  );
}
