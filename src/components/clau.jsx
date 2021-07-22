const data = skill.filter(user => user.Skills.filter(skill => skill.includes('MVP')).length)


const data = skills.filter(user => {
    const expectedKey = user.skills ? 'skills' : 'Skills';
    return user[expectedKey].filter(skill => skill.includes('MVP')).length
  })

  
//   hay que asignarlo a una función "onKeyUp" (cambiar onChange del código) y que se dispare la función "handleChange"

// Cuando se dispare handle
// handleChange, tiene que llamar a la función "data", y debe pasarle el valor de handleChange en ('MVP')
// (Trato de escribir lo que me va diciendo, después lo deciframos xd)

