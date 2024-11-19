import type { MenuDto } from '@/apis/__generated/model/dto'

// 定义编辑类型：创建和修改
export type EditMode = 'CREATE' | 'UPDATE'

export interface Scope<T> {
    row: T
    $index: number
}

// 定义返回类型
export interface Result<T> {
    code: number
    success: boolean
    msg: string
    result: T
}

// 定义菜单数据传输对象
export type MenuTreeDto = {
    children?: MenuTreeDto[]
} & MenuDto['MenuRepository/SIMPLE_FETCHER']