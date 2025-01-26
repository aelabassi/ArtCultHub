import { Router, Response, Request }  from "express";
import paypal from 'paypal-rest-sdk';
import { PaymentRequest } from "../@types";

const router = Router();

/**
 * @desc Create a payment request
 * @route POST /api/paypal
 * @access signed users
 * @param {PaymentRequest} req
 * @param {Response} res
 * @returns {void}
 */
router.post('/create-payment', (req: Request, res: Response) => {
    try {
      const { price, currency, description, returnUrl, cancelUrl }: PaymentRequest = req.body;
  
      const create_payment_json = {
        intent: 'sale',
        payer: {
          payment_method: 'paypal'
        },
        redirect_urls: {
          return_url: returnUrl,
          cancel_url: cancelUrl
        },
        transactions: [{
          amount: {
            currency: currency,
            total: price.toString()
          },
          description: description
        }]
      };
  
      paypal.payment.create(create_payment_json, (error: any, payment: any) => {
        if (error) {
          throw error;
        } else {
          const links = payment.links;
          const approvalUrl = links?.find((link: any) => link.rel === 'approval_url');
          
          if (approvalUrl) {
            res.json({ approval_url: approvalUrl.href });
          } else {
            throw new Error('No approval URL found');
          }
        }
      });
    } catch (error) {
      console.error('Payment creation error:', error);
      res.status(500).json({ error: 'Failed to create payment' });
    }
  });
  
  router.get('/execute-payment', (req: Request, res: Response) => {
    const payerId = req.query.PayerID as string;
    const paymentId = req.query.paymentId as string;
  
    const execute_payment_json = {
      payer_id: payerId
    };
  
    paypal.payment.execute(paymentId, execute_payment_json, (error: any, payment: any) => {
      if (error) {
        console.error('Payment execution error:', error);
        res.status(500).json({ error: 'Failed to execute payment' });
      } else {
        res.json({ success: true, payment });
      }
    });
  });
  
  export default router;