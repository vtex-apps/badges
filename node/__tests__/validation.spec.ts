import { validation } from '../utils/validation'

describe('Test valdiation', () => {
  it('Test if validation have been called with type = ""', async () => {
    const validationValues = {
      type: '',
      content: 'Aroma',
      name: 'Aromas',
      simpleStatements: [
        {
          object: {
            name: '3',
            value: '4',
          },
          subject: 'specificationProperties',
          verb: '=',
        },
      ] as unknown as [],
      operator: 'all',
      priority: 1,
    }

    expect(() => {
      validation(validationValues, false)
    }).toThrow('It is necessary to send a type')
  })

  it('Test if validation have been called with name = ""', async () => {
    const validationValues = {
      type: 'html',
      content: 'Aroma',
      name: '',
      simpleStatements: [
        {
          object: {
            name: '3',
            value: '4',
          },
          subject: 'specificationProperties',
          verb: '=',
        },
      ] as unknown as [],
      operator: 'all',
      priority: 1,
    }

    expect(() => {
      validation(validationValues, false)
    }).toThrow('It is necessary to send a name')
  })

  it('Test if validation have been called with content = ""', async () => {
    const validationValues = {
      type: 'html',
      content: '',
      name: 'Aromas',
      simpleStatements: [
        {
          object: {
            name: '3',
            value: '4',
          },
          subject: 'specificationProperties',
          verb: '=',
        },
      ] as unknown as [],
      operator: 'all',
      priority: 1,
    }

    expect(() => {
      validation(validationValues, false)
    }).toThrow('It is necessary to send a content')
  })

  it('Test if validation have been called with simpleStaments = []', async () => {
    const validationValues = {
      type: 'html',
      content: 'Aromas',
      name: 'Aromas',
      simpleStatements: [] as unknown as [],
      operator: 'all',
      priority: 1,
    }

    expect(() => {
      validation(validationValues, false)
    }).toThrow('It is necessary to send a simpleStatement')
  })

  it('Test if validation have been called with operator = ""', async () => {
    const validationValues = {
      type: 'html',
      content: 'Aromas',
      name: 'Aromas',
      simpleStatements: [
        {
          object: {
            name: '3',
            value: '4',
          },
          subject: 'specificationProperties',
          verb: '=',
        },
      ] as unknown as [],
      operator: '',
      priority: 1,
    }

    expect(() => {
      validation(validationValues, false)
    }).toThrow('It is necessary to send an operator')
  })

  it('Test if validation have been called with priority = 0', async () => {
    const validationValues = {
      type: 'html',
      content: 'Aromas',
      name: 'Aromas',
      simpleStatements: [
        {
          object: {
            name: '3',
            value: '4',
          },
          subject: 'specificationProperties',
          verb: '=',
        },
      ] as unknown as [],
      operator: 'all',
      priority: 0,
    }

    expect(() => {
      validation(validationValues, false)
    }).toThrow('It is necessary to send a priority')
  })

  it('Test if validation have been called with idBadges = ""', async () => {
    const validationValues = {
      type: 'html',
      content: 'Aromas',
      name: 'Aromas',
      simpleStatements: [
        {
          object: {
            name: '3',
            value: '4',
          },
          subject: 'specificationProperties',
          verb: '=',
        },
      ] as unknown as [],
      operator: 'all',
      priority: 1,
    }

    const idBadges = ''

    expect(() => {
      validation(validationValues, true, idBadges)
    }).toThrow('It is necessary to send an ID')
  })

  it('Test if validation have been called with content = "<script></script>"', async () => {
    const validationValues = {
      type: 'html',
      content: '<script></script>',
      name: 'Aromas',
      simpleStatements: [
        {
          object: {
            name: '3',
            value: '4',
          },
          subject: 'specificationProperties',
          verb: '=',
        },
      ] as unknown as [],
      operator: 'all',
      priority: 1,
    }

    const idBadges = ''

    expect(() => {
      validation(validationValues, true, idBadges)
    }).toThrow('Adding scripts is not allowed')
  })
})
