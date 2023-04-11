import { evaluate } from 'mathjs'

const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;

export const Calbisection = (xl, xr,Equation) => {
    var tmp = []
    var xm,fXm,fXr,ea,fXl;
    var iter = 0;
    var MAX = 50;
    const e = 0.00001;
    var obj={};
    
    xm = (xl+xr)/2.0;
    fXr = evaluate(Equation, {x:xr})
    fXl = evaluate(Equation, {x:xl})


    do
    {
        xm = (xl+xr)/2.0;
        fXr = evaluate(Equation, {x:xr})
        fXm = evaluate(Equation, {x:xm})
        iter ++;
        if (fXm*fXr > 0)
        {
            ea = error(xr, xm);
            obj = {
                iteration:iter,
                Xl:xl,
                Xm:xm,
                Xr:xr,
                error:ea
            }
            tmp.push(obj)
            xr = xm;
        }
        else if (fXm*fXr < 0)
        {
            ea = error(xl, xm);
            obj = {
                iteration:iter,
                Xl:xl,
                Xm:xm,
                Xr:xr,
                error:ea
            }
            tmp.push(obj)
            xl = xm;
        }
    }while(ea>e && iter<MAX)
    return {re_data : tmp , New_N : xm}

}

